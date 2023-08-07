import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
            <main className="app">
              <Nav />
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
