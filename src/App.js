import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { puplicRoutes } from './routes';
import DefaultLayout from './layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {puplicRoutes.map((puplicRoute, index) => {
                        const Page = puplicRoute.component;

                        let Layout = DefaultLayout;

                        if (puplicRoute.layout) {
                            Layout = puplicRoute.layout;
                        } else if (puplicRoute.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={puplicRoute.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
