import { combineReducers } from 'redux'
import other from './other'
import DataStoragereducer from '../DataStorage/store/DataStoragereducer'
import DataProcessingreducer from '../DataProcessing/store/DataProcessingreducer'
import Preprocessingreducer from '@/pages/Preprocessing/store/Preprocessingreducer'
import ModelTrainingreducer from '@/pages/ModelTtrainning/store/ModelTrainingreducer'
import ModelCheckreducer from '@/pages/ModelCheck/store/ModelCheckreducer'
import TagManagementreducer from '@/pages/TagManagement/store/TagManagementreducer'

import DatasetConstructReducer from '@/pages/DatasetConstruct/store/DatasetConstructReducer'
import LifePredictionreducer from '@/pages/LifePrediction/store/LifePredictionreducer'
import Modelvaluatereducer from '@/pages/Modelvaluate/store/Modelvaluatereducer'
import StateEvaluatereducer from '@/pages/StateEvaluate/store/StateEvaluatereducer'
import TableTimeFrequencyreducer from '@/pages/TableTimeFrequency/store/TableTimeFrequencyreducer'
// import IDreducer from './IDreducer'
// import AlgorithmManagementreducer from '../AlgorithmManagement/store/AlgorithmManagementreducer'
// import ModelValuatereducer from '../Modelvaluate/store/ModelValuatereducer'
// import StateEvaluatereducer from '../StateEvaluate/store/StateEvaluatereducer'
const reducer = combineReducers ({
    other,
    DataStoragereducer,
    DataProcessingreducer,
    Preprocessingreducer,
    ModelTrainingreducer,
    ModelCheckreducer,
    TagManagementreducer,
    LifePredictionreducer,
    DatasetConstructReducer,
    Modelvaluatereducer,
    StateEvaluatereducer,
    TableTimeFrequencyreducer
    // TagManagementreducer,
    // AlgorithmManagementreducer,
    // ModelValuatereducer,
    // StateEvaluatereducer
})



export default reducer
