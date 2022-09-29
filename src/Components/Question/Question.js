import React from 'react';

const Question = () => {
    return (
        <div className='p-4'>
            <h2 className='text-info'>How does react work?</h2>
            <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>

            <h2 className='text-info'>Difference between props and state</h2>
            <table class="table caption-top">
  
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Props</th>
            <th scope="col">State</th>
            
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>The Data is passed from one component to another.</td>
            <td>The Data is passed within the component only.</td>
            
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>It is Immutable (cannot be modified).</td>
            <td>It is Mutable ( can be modified).</td>
            
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Props can be used with state and functional components.</td>
            <td>State can be used only with the state components/class component (Before 16.0).</td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Props are read-only.</td>
            <td>State is both read and write.</td>
            </tr>
        </tbody>
        </table>

        <h2 className='text-info'>How does work useEffect without data load?</h2>
        <p> useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.So with that in mind you actually need more careful checks to ensure you code doesn't have unexpected consequences by not using useEffect. Also if your fetch wanted to re-fetch on prop changes your solution also doesn't work.
        Fully understanding effects is a complex issue. As Dan Abramov of the React team stated, you might have to unlearn some things to fully grasp effects.</p>
        </div>
        
    );
};

export default Question;