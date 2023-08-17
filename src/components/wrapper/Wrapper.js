import Header from '../ui/Header'
import ListTodo from '../ui/ListTodo'
import Footer from '../ui/Footer'
import StateProvider from './StateProvider'
import KeyStrokeHandler from './KeyStrokeHandler'
import Info from '../ui/Info'

function Wrapper() {
    return (
        <div>
            <div className='wrapper'>
                <StateProvider>
                    <KeyStrokeHandler>
                        <Header />
                        <ListTodo />
                        <Footer />
                    </KeyStrokeHandler>
                </StateProvider>
            </div>
            <StateProvider>
                <KeyStrokeHandler>
                    <Info />
                </KeyStrokeHandler>
            </StateProvider>
        </div>
    )
}

export default Wrapper
