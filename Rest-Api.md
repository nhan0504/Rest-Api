# Rest Api
## Api
- What is  Api (Aplication programming interface): Set of rules how application or device can communicate and connect each other. 
- APIs let you work with other product and services without knowing how it was implemented -> Flexible and simple
- Remote APIs: The resources is outisde the comupter that request it. Most common communication network is internet -> Most APIs are designed on web standards. 
> Not all APIs are web APIs. But web APIs are remote APIs 
- Web API develop -> Need protocols to standardize. Two types web API
  - SOAP API (Simple Object acsess protocol):
    - Use XML for message format
    - Receive reques tthrough HTTP/SMTP
    - Use for apps running in different environment or written in different language to share information
  - REST API (Representational State Transfer): Not a protocol but an architectural style
    - Client-server architecture: Composed of client, server, and resources. Handle request through HTTP
    - Statelessness: No client content is store on the server between request
    - Layered system: Client-server interaction can go through additional layers like balancing, security, ...
    - Uniform interface: Include 4 facts
      - Resources indetify in request
      - Resource manipulation through representations: Client receive file that represent the resources that they can modify
      - Self-descriptive messages: Message returned to client contain information on how the client can process the information
      - Hypermedia as the engine of application state: After accessing the resources, client can discover through hyperlink all possible actions.