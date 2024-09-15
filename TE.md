graph TD
    A[IFTTT] -->|POST /api/alert| B(Azure App Service)
    B -->|Store alert| C[(Azure Cosmos DB)]
    B -->|Send real-time update| D{Azure SignalR Service}
    E[React Frontend] -->|GET /api/alerts| B
    E -->|Acknowledge alert| B
    D -->|Push updates| E
    B -->|Read/Write alerts| C
    F[Azure Static Web Apps] -->|Host| E
    
    subgraph "Backend (Flask API)"
    B
    end
    
    subgraph "Frontend"
    E
    F
    end
    
    style A fill:#f9d71c,stroke:#333,stroke-width:2px
    style B fill:#3498db,stroke:#333,stroke-width:2px
    style C fill:#e74c3c,stroke:#333,stroke-width:2px
    style D fill:#2ecc71,stroke:#333,stroke-width:2px
    style E fill:#9b59b6,stroke:#333,stroke-width:2px
    style F fill:#34495e,stroke:#333,stroke-width:2px
