```javascript
const query = {"$expr": {"$gt": [{"$cond": [{"$isNumber": {"$toDouble": "$price"}}, {"$toDouble": "$price"}, 0 ]}, 100] } };
const result = db.collection.find(query);
```