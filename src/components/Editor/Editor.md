Normal:
```
const { Button } = require('@material-ui/core');
initialState = {
    content: "<h1>Lorem Ipsum</h1>",
};

onChange = (content) => {
    setState({ content })
}

<div>
  <Editor content={state.content}
          onChange={onChange}/>
</div>
```

