import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';
const loggerMiddleware = createLogger()
export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware, // 允许我们 dispatch() 函数
            loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
        )
    )
    return store
}