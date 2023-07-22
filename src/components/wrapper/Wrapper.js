import Header from '../ui/Header'
import ListTodo from '../ui/ListTodo'
import Footer from '../ui/Footer'
import StateProvider from './StateProvider'

function Wrapper() {
    return (
        <div>
            <div className='wrapper'>
                <StateProvider>
                    <Header />
                    <ListTodo />
                    <Footer />
                </StateProvider>
            </div>
            <p className='info'>Press `Esc` to cancel.</p>
        </div>
    )
}

export default Wrapper
