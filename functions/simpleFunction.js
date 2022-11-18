exports = async function (changeEvent) {
  // Destructure out fields from the change stream event object
  var fullDocument = changeEvent.fullDocument;
  fullDocument.changed = 'this is a changed';

  // If a customer changed, add the collection the updated change.
  const mongodb = context.services.get("mongodb-atlas");
  const ccc = mongodb.db("test").collection("custChanges");

  const result = await ccc.insertOne(fullDocument);

  return result;
};

