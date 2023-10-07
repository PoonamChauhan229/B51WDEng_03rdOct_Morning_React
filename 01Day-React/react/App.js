
        // create h1 Tag
        // React.createElement()

        // create an element is the core of React
        const heading=React.createElement('h1',{id:"title"},"Hello World Program-React")

        //we want to render the heading inside the root
        // create an Root is the core thing of ReactDOM
        const root=ReactDOM.createRoot(document.getElementById('root'))
        root.render(heading)

       


        