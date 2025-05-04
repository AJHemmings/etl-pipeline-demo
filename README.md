# Basic ETL Pipeline with Node.js

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)  
[![axios](https://img.shields.io/badge/axios-1.x-blue)](https://axios-http.com/)

A simple ETL (Extract, Transform, Load) pipeline that processes data from JSONPlaceholder API and saves transformed results to a JSON file.

## Overview

This pipeline performs three main operations:

1. **Extract**: Fetches post data from JSONPlaceholder API  
2. **Transform**: Reformats the data structure  
3. **Load**: Saves transformed data to `transformed_data.json`

## Installation

1. **Prerequisites**
   - Node.js (v18.x recommended)
   - npm (comes with Node.js)

2. **Install dependencies**
   ```bash
   npm install axios
   ```

## Usage

Run the pipeline:

```bash
node etl.js
```

Successful execution will show:

```
Extracted 100 objects  
Transformed 100 objects  
Loaded data to ./transformed_data.json
```

## Pipeline Components

### 1. Extraction

- Fetches data from [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)  
- Handles both array and object responses  
- Logs extraction count  

### 2. Transformation

- Reformats each object:

```javascript
{
  "name": "Original title field",
  "description": "Original body field"
}
```

### 3. Loading

- Saves transformed data to JSON file  
- Creates formatted JSON with 2-space indentation  
- Output file: `transformed_data.json`

## Code Structure

```
ETL Pipeline Flow:
startEtl()
├── getAllObjects()          // Extraction
├── transformObject()        // Transformation
└── loadObjectsToFile()      // Loading
```

## Output Example

```json
[
  {
    "name": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  ...
]
```

## Error Handling

- Catches and logs API errors  
- Validates output file path  
- Handles unexpected data formats  

## Future Enhancements

- Add data validation  
- Implement batch processing  
- Add database integration  
- Include unit tests  
- Add CLI arguments for input/output paths  

## License

MIT License

## Author

**Adam Hemmings**  
Repository: [https://github.com/AJHemmings/etl-pipeline-demo](https://github.com/AJHemmings/etl-pipeline-demo)
