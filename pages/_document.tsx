import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="CLIWise is a powerful AI-powered platform that generates equivalent command line interface syntax for popular CLIs such as Git, Linux, FTP, Rclone, AWS CLI, Heroku CLI, Docker CLI, and Azure CLI, making it easier for users to manage their projects from the command line. Get started today!"
          />
          <meta property="og:site_name" content="Your AI-Powered Command Line Solution - CLIwise" />
          <meta
            property="og:description"
            content="CLIWise is a powerful AI-powered platform that generates equivalent command line interface syntax for popular CLIs such as Git, Linux, FTP, Rclone, AWS CLI, Heroku CLI, Docker CLI, and Azure CLI, making it easier for users to manage their projects from the command line. Get started today!"
          />
          <meta property="og:title" content="Your AI-Powered Command Line Solution - CLIwise" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Your AI-Powered Command Line Solution - CLIwise" />
          <meta
            name="twitter:description"
            content="CLIWise is a powerful AI-powered platform that generates equivalent command line interface syntax for popular CLIs such as Git, Linux, FTP, Rclone, AWS CLI, Heroku CLI, Docker CLI, and Azure CLI, making it easier for users to manage their projects from the command line. Get started today!"
          />
          <meta
            property="og:image"
            content="https://cliwise.llego.dev/cliwise-featured.png"
          />
          <meta
            name="twitter:image"
            content="https://cliwise.llego.dev/cliwise-featured.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
