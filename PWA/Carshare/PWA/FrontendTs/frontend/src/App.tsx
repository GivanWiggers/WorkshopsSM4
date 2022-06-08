import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import AppWrapper from "./layout/AppWrapper";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: Infinity } },
    });
    return (
        <Router>
            <QueryClientProvider client={queryClient}>
                <AppWrapper>
                    <Routes />
                </AppWrapper>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            </QueryClientProvider>
        </Router>
    );
}

export default App;
