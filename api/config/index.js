module.exports = {
    secret: process.env.NODE_ENV === "production" ? process.env.SECRET : "SRTVDMFKEINSPEMOWAMCLSEJRDBVMSERIFJDLSSSCVR",
    api: process.env.NODE_ENV === "production" ? "https://www.mamaqueromassa.com.br/api" : "https://localhost:3000",
    loja: process.env.NODE_ENV === "production" ? "https://www.mamaqueromassa.com.br" : "https://localhost:8000"
    };