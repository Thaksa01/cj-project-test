# Test Coding CJ-Project (UI Engineer)

This project have 3 components, Input, Tags and List By use React Nextjs Typescripts
## Features

# - Input

| Paramater | type | example |
| ------ | ------ | ------|
| onAddTag | function | () => void |
| children | React.ReactNode | <div/> |

```js
import TagInput from "./components/input";

<TagInput 
    onAddTag={addTag} 
    children={<Tag tags={tags} removeTag={removeTag} />}
/>
```

# - Tags

| Paramater | type | example |
| ------ | ------ | ------|
| tags | TagData[] | [{ text: "test1", count: 0}] |
| removeTag | function | () => void |

```js
import Tag from "./components/tag";

<Tag tags={tags} removeTag={removeTag} />
```

# - List

| Paramater | type | example |
| ------ | ------ | ------|
| dataList | string[] | ["red", "green", "blue"] |
| removeTag | function | () => void |

```js
import List from "./components/list";

<List dataList={colors} title={"Colors"}/>
```

## Step To Run project

### firstly, this project want to install dependencies

```sh
npm install
```
### or (Yarn)
```sh
yarn install
```

### For Run Project
```sh
npm run build && npm run start
or
npm run build; npm run start
```
if you want start on dev
```sh
npm run dev
```

now i see port to run  port 
```sh
http://localhost:3000   127.0.0.1:3000
```

### For Run test Project
```sh
npm run test
```
### or (Yarn)
```sh
yarn test
```


## Contact me


| Plugin | README |
| ------ | ------ |
| Linkedin | https://www.linkedin.com/in/thaksa-nanan-061661236/
| phone| 0826975094
