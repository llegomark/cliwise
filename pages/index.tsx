import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { CliwiseType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import { useRouter } from "next/router";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  const [response, setResponse] = useState<Record<string, unknown> | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [syntax, setSyntax] = useState("");
  const [usercommand, setUsercommand] = useState<CliwiseType>("Git");
  const [generatedSyntax, setGeneratedSyntax] = useState<String>("");

  const router = useRouter();
  useEffect(() => {}, []);

  const prompt =
    usercommand === "Git"
      ? `In this prompt, you will act as a Git command line interface. I will provide you with a plain English Git command, and you will respond with the equivalent Git command line syntax. For example: Input: "Create a new branch called 'develop'" and your respond with the Output: "git branch develop". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Linux"
      ? `In this prompt, you will act as a Linux command line interface. I will provide you with a plain English Linux command, and you will respond with the equivalent Linux command line syntax. For example: Input: "List the files in the current directory, including hidden files" and your respond with the Output: "ls -al". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Windows Command Prompt"
      ? `In this prompt, you will act as a Windows Command Prompt (cmd.exe). I will provide you with a plain English Windows command, and you will respond with the equivalent Windows command line syntax. For example: Input: "List the files in the current directory" and your respond with the Output: "dir". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "PowerShell on Windows"
      ? `In this prompt, you will act as a Windows PowerShell Interface. I will provide you with a plain English Windows command, and you will respond with the equivalent PowerShell syntax. For example: Input: "Get the list of processes currently running on the system" and your respond with the Output: "Get-Process". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "macOS Terminal"
      ? `In this prompt, you will act as a macOS Terminal interface. I will provide you with a plain English macOS command, and you will respond with the equivalent macOS Terminal syntax. For example: Input: "List the files in the current directory, including hidden files" and your respond with the Output: "ls -la". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "SSH (Secure Shell)"
      ? `In this prompt, you will act as a Secure Shell (SSH) interface. I will provide you with a plain English SSH command, and you will respond with the equivalent SSH syntax. For example: Input: "Connect to a remote server with IP address 192.168.1.100 as the user 'markllego'" and your respond with the Output: "ssh markllego@192.168.1.100". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "SQL CLI"
      ? `In this prompt, you will act as a SQL command line interface. I will provide you with a plain English SQL command, and you will respond with the equivalent SQL syntax. For example: Input: "Get the count of all rows in the 'customers' table'" and your respond with the Output: "SELECT COUNT(*) FROM customers;". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "FTP (File Transfer Protocol)"
      ? `In this prompt, you will act as an FTP command line interface. I will provide you with a plain English FTP command, and you will respond with the equivalent FTP syntax. For example: Input: "Connect to a remote FTP server with IP address 192.168.1.100 as the user 'markllego'" and your respond with the Output: "ftp 192.168.1.100, then enter 'username markllego' and 'password ******'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Rclone"
      ? `In this prompt, you will act as an Rclone command line interface. I will provide you with a plain English Rclone command, and you will respond with the equivalent Rclone syntax. For example: Input: "Upload a file named 'markllego.txt' to Google Drive'" and your respond with the Output: "rclone copy markllego.txt gdrive:file.txt'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Amazon AWS CLI"
      ? `In this prompt, you will act as an Amazon Web Services (AWS) Command Line Interface. I will provide you with a plain English AWS command, and you will respond with the equivalent AWS CLI syntax. For example: Input: "List the EC2 instances in the current region" and your respond with the Output: "aws ec2 describe-instances'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Heroku CLI"
      ? `In this prompt, you will act as a Command Line Interface for the cloud platform Heroku. I will provide you with a plain English Heroku command, and you will respond with the equivalent Heroku CLI syntax. For example: Input: "Get the logs for the app named 'cliwise'" and your respond with the Output: "heroku logs --app cliwise'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Docker CLI"
      ? `In this prompt, you will act as a Command Line Interface for the Docker containerization platform. I will provide you with a plain English Docker command, and you will respond with the equivalent Docker CLI syntax. For example: Input: "List all the running containers" and your respond with the Output: "docker ps -a --filter "status=running"'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Microsoft Azure CLI"
      ? `In this prompt, you will act as a Microsoft Azure Command Line Interface (Azure CLI) expert. I will provide you with a plain English Azure command, and you will respond with the equivalent Azure CLI command line syntax. For example: Input: "Create a new Azure virtual machine" and your respond with the Output: "az vm create --name myVM --image UbuntuLTS'. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Terraform CLI"
      ? `In this prompt, you will act as a Terraform CLI expert. I will provide you with a plain English Terraform command, and you will respond with the equivalent Terraform CLI command line syntax. For example: Input: "Create a new resource for a virtual machine in Terraform" and your respond with the Output: "terraform apply -var 'image_id=ubuntu-20-04-x64''. Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Ansible CLI"
      ? `In this prompt, you will act as a Ansible CLI expert. I will provide you with a plain English Ansible command, and you will respond with the equivalent Ansible CLI command line syntax. For example: Input: "Install Apache web server on a remote host in Ansible" and your respond with the Output: "ansible-playbook -i 'host,' apache-install.yml". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Kubernetes CLI"
      ? `In this prompt, you will act as a Kubernetes CLI expert. I will provide you with a plain English Kubernetes command, and you will respond with the equivalent Kubernetes CLI command line syntax. For example: Input: "Create a new deployment in Kubernetes" and your respond with the Output: "kubectl create deployment nginx --image=nginx". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "AWS Elastic Beanstalk CLI"
      ? `In this prompt, you will act as a AWS Elastic Beanstalk CLI expert. I will provide you with a plain English AWS Elastic Beanstalk command, and you will respond with the equivalent AWS Elastic Beanstalk CLI command line syntax. For example: Input: "Create a new environment in AWS Elastic Beanstalk" and your respond with the Output: "eb create my-environment". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Firebase CLI"
      ? `In this prompt, you will act as a Firebase CLI expert. I will provide you with a plain English Firebase command, and you will respond with the equivalent Firebase CLI command line syntax. For example: Input: "Create a new Firebase project" and your respond with the Output: "firebase projects:create my-project". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "DigitalOcean CLI"
      ? `In this prompt, you will act as a DigitalOcean CLI expert. I will provide you with a plain English DigitalOcean command, and you will respond with the equivalent DigitalOcean CLI command line syntax. For example: Input: "Create a new virtual machine in DigitalOcean" and your respond with the Output: "doctl compute droplet create --name myVM --image ubuntu-20-04-x64". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : usercommand === "Google Cloud Platform CLI"
      ? `In this prompt, you will act as a Google Cloud Platform CLI expert. I will provide you with a plain English Google Cloud Platform command, and you will respond with the equivalent Google Cloud Platform CLI command line syntax. For example: Input: "Create a new instance in GCP Cloud SDK" and your respond with the Output: "gcloud compute instances create my-instance --image-family ubuntu-20-04". Clearly labeled your response with "1." Please note that if the user input is not a recognizable CLI command, your response should be: "Please enter a valid CLI command in plain English." User Input: Context: ${syntax}${
          syntax.slice(-1) === "." ? "" : "."
        }`
      : "";

  const generateSyntax = async (e: any) => {
    e.preventDefault();
    setGeneratedSyntax("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      setResponse({
        status: response.status,
        body: await response.text(),
        headers: {
          "X-Ratelimit-Limit": response.headers.get("X-Ratelimit-Limit"),
          "X-Ratelimit-Remaining": response.headers.get(
            "X-Ratelimit-Remaining"
          ),
          "X-Ratelimit-Reset": response.headers.get("X-Ratelimit-Reset"),
        },
      });
      setLoading(false);
      alert(`Rate limit reached, try again after one minute.`);
      return;
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedSyntax((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  const isDisabled = () => {
    if (syntax === "") {
      return true;
    } else {
      return false;
    }
  };

  const limitCharacters = (e: any) => {
    if (e.target.value.length > 300) {
      e.target.value = e.target.value.substr(0, 300);
      toast.error("You have reached the maximum number of characters.");
    }
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Your AI-Powered Command Line Solution - CLIwise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="sm:mt-15 mt-12 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-6xl md:text-7xl">
          Streamline Your Command Line Experience with CLIwise!
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-7 text-slate-900 sm:text-base lg:text-lg">
          Say goodbye to manual syntax errors with CLIwise. Our AI-powered
          platform generates syntax for Git, Linux and many other command line
          interfaces with ease, elevating your workflow to the next level.
        </p>
        <div className="max-w-xl w-full px-6">
          <div className="flex mt-10 items-center space-x-3">
            <span className="text-white bg-black rounded-full w-8 h-8 text-center flex items-center justify-center">
              1
            </span>
            <p className="ml-3 text-left text-base">
              Type your plain English command.
            </p>
          </div>
          <textarea
            value={syntax}
            onChange={(e) => setSyntax(e.target.value)}
            onInput={limitCharacters}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isDisabled()) {
                e.preventDefault();
                generateSyntax(e);
              }
            }}
            rows={4}
            className="w-full mt-5 rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
            placeholder={
              "For example: 'Create a new branch in Git called 'development'."
            }
          />
          <div className="flex mt-5 items-center space-x-3">
            <span className="text-white bg-black rounded-full w-8 h-8 text-center flex items-center justify-center">
              2
            </span>
            <p className="ml-3 text-left text-base">
              Select a Command Line Interface (CLI).
            </p>
          </div>
          <div className="block mt-3">
            <DropDown
              cliwise={usercommand}
              setCliwise={(newCliwise) => setUsercommand(newCliwise)}
            />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-lg text-white text-base px-4 py-2 mt-10 hover:bg-black/80 w-full"
              onClick={(e) => generateSyntax(e)}
              disabled={isDisabled()}
            >
              Generate Syntax &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-lg text-white text-base px-4 py-2 mt-10 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedSyntax && (
                <>
                  <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mx-auto px-3">
                      Equivalent Syntax
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto px-3">
                    {generatedSyntax
                      .substring(generatedSyntax.indexOf("1") + 3)
                      .split(/[1-3]\./)
                      .map((generatedSyntax) => {
                        return (
                          <div
                            className="bg-sky-200 rounded-xl shadow-md p-4 hover:bg-sky-100 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-copy border"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedSyntax);
                              toast("CLI Command Copied to Clipboard", {
                                icon: "✂️",
                              });
                            }}
                            key={generatedSyntax}
                          >
                            <p className="text-base leading-tight text-justify">
                              {generatedSyntax}
                            </p>
                          </div>
                        );
                      })}
                    <p className="flex bg-yellow-200 p-3 text-justify text-yellow-800 font-light leading-tight rounded-lg text-xs mt-2">
                      <InformationCircleIcon className="h-4 w-4 mr-2" />
                      <span>
                        Click the generated syntax to copy it to your clipboard.
                      </span>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;