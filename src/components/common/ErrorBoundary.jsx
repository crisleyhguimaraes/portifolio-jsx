import React from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // Aqui você pode adicionar um serviço de log de erros
        console.error("Error:", error);
        console.error("Error Info:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-content">
                        <h2>Ops! Algo deu errado</h2>
                        <p>
                            Desculpe, ocorreu um erro inesperado. Por favor,
                            tente novamente.
                        </p>
                        <button
                            className="btn btn-primary"
                            onClick={() => window.location.reload()}
                        >
                            Recarregar Página
                        </button>
                        {process.env.NODE_ENV === "development" && (
                            <div className="error-details">
                                <h3>Detalhes do Erro:</h3>
                                <pre>
                                    {this.state.error &&
                                        this.state.error.toString()}
                                </pre>
                                <pre>
                                    {this.state.errorInfo &&
                                        this.state.errorInfo.componentStack}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
