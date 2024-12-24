```javascript
const query = { "$expr": { "$gt": [ { "$toDouble": "$price" }, 100 ] } };
const result = db.collection.find(query);
```