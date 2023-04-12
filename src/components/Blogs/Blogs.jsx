import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div>
            <div className='my-10'>
                <h3 className='text-center text-3xl px-4'>Question and Answer Section</h3>
                <div className='flex justify-center my-7'>
                    <div className='question-container px-6 py-8 rounded-xl card shadow-xl shadow-2xl rounded-xl'>
                        <h3>1. What is Context API</h3>
                        <p><span style={{ color: 'green' }}>Ans:</span>
                            Context API is a method of sending props to children component. When we build a webpage that page has many nested component making website interactive. We need to send props to children component but when there are many components it is difficult to send props. Context Api store some data as state that can be pass any children component.
                        </p>
                        <h3>2. What is custom Hook?</h3>
                        <p><span style={{ color: 'green' }}>Ans:</span>
                            Custom Hook is a JavaScript reuseable function. When we need to use a function many time or share logic between other JavaScript function we can create a custom hook by ourselves and use it several times.
                        </p>
                        <h3>3. What is useReff?</h3>
                        <p><span style={{ color: 'green' }}>Ans:</span>
                            "UseReff" is react hook that accept only one argument as initial value and returns a ref object. This object has a special property (.current). UseReff 
                            used used to create reference object and this ref used to access and assign DOM nodes inside the render method
                        </p>
                        <h3>4. What is useMemo</h3>
                        <p><span style={{ color: 'green' }}>Ans:</span>
                            "UseMemo" is a react Hook. This hook used to optimized the code while render. It cache or memorize the value between rendering. When we re render react component render from the begging that is time consumed and un optimized so useMemo memorize some data the that helps to render faster. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;