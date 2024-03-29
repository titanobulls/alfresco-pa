<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/components/documentlibrary/include/documentlist.lib.js">

function main()
{
   AlfrescoUtil.param('nodeRef');
   AlfrescoUtil.param('site', null);
   AlfrescoUtil.param('container', 'documentLibrary');

   var documentDetails = AlfrescoUtil.getNodeDetails(model.nodeRef, model.site,
   {
      actions: true
   });
   if (documentDetails)
   {
      model.documentDetails = true;
      doclibCommon();
   }
   
   model.syncMode = syncMode.getValue();

   // Widget instantiation metadata...
   var documentActions = {
      id : "DocumentActions", 
      name : "Alfresco.DocumentActions",
      options : {
         nodeRef : model.nodeRef,
         siteId : (model.site != null) ? model.site : null,
         containerId : model.container,
         rootNode : model.rootNode,
         replicationUrlMapping : (model.replicationUrlMappingJSON != null) ? model.replicationUrlMappingJSON : "{}",
         documentDetails : documentDetails,
         repositoryBrowsing : (model.rootNode != null),
         syncMode : model.syncMode != null ? model.syncMode : "",         
      }
   };
   model.widgets = [documentActions];
}

main();
