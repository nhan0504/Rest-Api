# Rest Api
## Api
- What is  Api (Aplication programming interface): Set of rules how application or device can communicate and connect each other.
  - Interface: Let you control or work with something without knowing how it is implemented 
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
      - Resources indetify in request are separate from the representation sent to client
      - Resource manipulation through representations: Client receive file that represent the resources that they can modify
      - Self-descriptive messages: Message returned to client contain information on how the client can process the information
      - Hypermedia as the engine of application state: After accessing the resources, client can discover through hyperlink all possible actions.
## API security
- REST APIs use HTTP that support TLS (Transport Layer Security) encryption

## REST
- Client make requests through HTTP (link to a specific URL) -> Transfer representations of the state of resources back to client in one of several format via HTTP: JSON, HTML, Python, ... JSON is the most popular
- Request: Each URL is a request
  - Made up of 4 majot parts:
    - The endpoint: The URL client request for. Follow the structure root-endpoint/?. 
      - root-endpoint: This is the start of any API client is requesting from. (Ex: root-endpoint of github is https://api.github.com)
      - The path: Determine the resources client request for. Identify available path by going through the API docs.
      - Query: Key value pair to costumize request (?query1=value1&query2=value2)
    - The method: type of request send to the server
      - GET: (default request method) Read data
      - POST: Create new resource on the server
      - PUT: Update resource on server
      - PATCH: Update resource on server
      - DELETE: Delete an entry from server
    - The header: Offers information to server and client. Used for various purposes such as authentication and providing information about the body content.
    - The data: The inforation client send to server
- Response: The data sent back is a response
