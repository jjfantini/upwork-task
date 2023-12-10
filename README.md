<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">pythonpackage</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/jjfantini/python_package.svg)](https://github.com/jjfantini/python_package/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/jjfantini/python_package.svg)](https://github.com/jjfantini/python_package/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10-3776AB.svg?style=flat&logo=python&logoColor=white)](https://www.python.org)
![License](https://img.shields.io/badge/License-Proprietary-black)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

</div>

---

<p align="center"> This package is a template for your <b>project</b>.
</p>

## 📝 **Table of Contents**

- [About](#about)
- [Features](#features)
- [Roadmap](../roadmap.md)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 **About** <a name = "about"></a>

This is my personal python package template. Using `cookiecutter` is on the roadmap.
This tmeplate is forked from Microsoft's python package repository.
I fixed some issues.
I've added a few things to the template:

- `Ruff` - style/linter tool
- `Poetry` - package management
- `pre-commit` - pre-commit hooks (checking commit messages, linting)
- `commitizen` & `cz_customiziable` - commit message management
- Custom GitHub Workflows
  - `bumpversion` - version management
  - `nox` - automated testing across various platforms and python versions.
  - `semantic-pr-check` - PR title validation
  - `sphinx` - documentation
  - `template-sync` - template synchronization
  - `publish` - publishing to PyPi
  - `code-cov` - code coverage
  - `CI` - continuous integration
  - `schedule-update-actions` - scheduled update of GitHub Actions

## **Features** <a name = "features"></a>

- **Highlight your Package Strengths**

## 🚗 **Roadmap** <a name = "roadmap"></a>

- [ ] Add `cookiecutter` template

## 🏁 **Getting Started** <a name = "getting_started"></a>

To get started with this template, simply 'Use This Template' to create a new repository and start building your project within the `src` directory. Try to open the project in GitHub Codespace, and to run the unit tests using the VS Code Test extension.

To start, search for `python_package` and change it to your new package name.

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisite Software Installed on Base Machine

- `Python` - programming language
- `Conda/miniconda/Mamba/micromamba` - env management, (recommend using micromamba)

### 📩 **Installing Package**

When I upload to pip:

```bash
pip install python_package
```

Current install method:

```bash
pip install git+https://github.com/user/python_package.git
```

## 🏗️ **Development Setup** <a name = "development_setup"></a>

This section shows users how to setup their environment using your `poetry.lock` file and `environment.yml`.

<details>
<summary><b>Setup Mamba Environment (w/Poetry)</b></summary>
<p>

This project uses a mamba environment.

1. I created the environment with a `--prefix` and not a name, to ensure that it installed in my project directory, not the default path. This is executed in the project root dir.

   ```bash
   # Windows
   mamba env create --prefix ./menv  --file environment.yml

   # MacOS / Linux
   mamba env create --prefix ./menv  --file base-environment.yml
   ```

2. I didn't want the full path to be displayed when using this env so I changed my `.condarc` file to show the env name as the last directory where the env is located.

   ```bash
   conda config --set env_prompt '({name})'
   conda config --add channels conda-forge
   ```

3. Activate the environment

   ```bash
   mamba init zsh / mamba init
   mamba activate ./menv
   ```

4. Check if poetry is installed

   ```bash
   mamba install poetry
   poetry --version
   # make sure it is the latest version
   # can use mamba search -f poetry
   ```

5. Install Packages from `poetry.lock`

   ```bash
   poetry install
   ```

6. If you get an error:

   ```
   EnvCommandError

   Command ['c:\\Users\\<user>\\<path>\\obb\\python.exe', '-m', 'pip', 'uninstall', 'charset-normalizer', '-y'] errored with the following return code 2
   ```

   Then run:

   ```
   pip install charset-normalizer --upgrade
   ```

   and re-run!

   ```bash
   poetry install
   ```

</p>
</details>
<details>
<summary><b>Setup Mamba Environment (w/o Poetry)</b></summary>
<p>

If you do not use `poetry` for some weird reason, I keep the updated environment specs in an `environment.yml` and `requirements.txt`file in the root of the project.

I use keep the env. specs up to date. This is packaged in a file `update_reqs.py`

```bash
conda env export | python -c "import sys; print(''.join(line for line in sys.stdin if 'prefix: ' not in line))" > environment.yml
# This cmd removes the 'prefix:' line to be platform independent.
conda list  --export > requirements.txt
```

### **Setup Conda Env (w/ requirements)**

This method will be installing dependencies from `requirements.txt || environment.yml`

### **Steps**

There are two methods to recreating the environment:

- Using requirements.txt

      ```bash
      conda create --name obb --file requirements.txt
      ```

- Using environment.yml (has my path prefix-check the file to change path prefix)

      ```bash
      # Windows
      conda env create --prefix ./obb -f environment.yml

      #Alternative OS
      conda env create --prefix ./obb --file base_environment.yml
      ```

</p>
</details>

<details>
<summary><b>Setting Up `Commitizen`</b></summary>
<p>
I am using the `vscode-commmitizen` extension to integrate `commitizen` into my workflow.
This allows for nice keyboard shortcuts and UI integration. I have also installed `cz_customizable` globally to allow me to customize the commit message template using `cz-config.js`.

The `pyproject.toml` file has the specifications for `cz_customizable` and `commitizen` to work together.

Follow the [quickstart guide](https://github.com/leoforfree/cz-customizable) and use the 'Quick Start' section to setup `cz-customizable`. You need to install
`cz-customizable` globally in order for the vscode extension to work along with the settings provided in the `pyproject.toml` file.

- [ ] make sure you have a `pre-commit-config.yml`
- [ ] make sure you have a `bumpversion.yml` in `.github/workflows`

</p>
</details>

## ⚡️ **GitHub Workflow Setup** <a name = "development_setup"></a>

There are 8 pre-made github actions that are used with this template. SOme require API_KEYS/TOKENS to work. Add your tokens to the secrets manager in your repo settings.

1. `bumpversion.yml`: This workflow automates the versioning of the project using bumpversion.
   - Uses a GitHub `PERSONAL_ACCESS_TOKEN`
2. `CI.yml`: This workflow manages the continuous integration of the project.
3. `code-cov.yml`: This workflow generates and updates the code coverage report.
   - Uses a GitHub `PERSONAL_ACCESS_TOKEN`
4. `publish.yml`: This workflow handles the publishing of the project, using `poetry` and publishing to PyPi.
   - Uses a PyPi `PYPI_PASSWORD` key.
5. `schedule-update-actions.yml`: This workflow updates GitHub Actions on a scheduled basis - every sunday.
6. `semantic-pr-check.yml`: This workflow validates the PR title to ensure it follows semantic conventions.
7. `sphinx.yml`: This workflow deploys Sphinx documentation to Pages.
8. `template-sync.yml`: This workflow synchronizes the project with the latest template updates.
9. `nox.yml`: Automated testing across various platforms and python versions.

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system. This project is setup for using `nox`.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## 🚀 Deployment <a name = "deployment"></a>

Add additional notes about how to deploy this on a live system.

## ⛏️ Built Using <a name = "built_using"></a>

- [OpenBB](https://www.openbb.co/) - Data Source
- [PostgreSQL](https://postgresql.com/) - Database
- [Python](https://python.org/) - Programming Language

## ✍️ Authors <a name = "authors"></a>

- [@jjfantini](https://github.com/jjfantini) - Idea & Initial work

See also the list of [contributors](https://github.com/jjfantini/python_package/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

# ----- Extra Info -----

## Python Project Template

This project is a template for creating Python projects that follows the Python Standards declared in PEP 621. It uses a pyproject.yaml file to configure the project and poetry to simplify the build process and publish to PyPI. You can manage all relevant configurations within the pyproject.toml file, streamlining development and promoting maintainability by centralizing project metadata, dependencies, and build specifications in one place.

## Project Organization

- `.github/workflows`: Contains GitHub Actions used for building, testing, and publishing.
- `.devcontainer/Dockerfile`: Contains Dockerfile to build a development container for VSCode with all the necessary extensions for Python development installed.
- `.devcontainer/devcontainer.json`: Contains the configuration for the development container for VSCode, including the Docker image to use, any additional VSCode extensions to install, and whether or not to mount the project directory into the container.
- `.vscode/settings.json`: Contains VSCode settings specific to the project, such as the Python interpreter to use and the maximum line length for auto-formatting.
- `src`: Place new source code here.
- `tests`: Contains Python-based test cases to validate source code.
- `pyproject.toml`: Contains metadata about the project and configurations for additional tools used to format, lint, type-check, and analyze Python code.
- `.prompts/`: Contains useful prompts to use during development for modifying and generating code and tests.

### `pyproject.toml`

The pyproject.toml file is a centralized configuration file for modern Python projects. It streamlines the development process by managing project metadata, dependencies, and development tool configurations in a single, structured file. This approach ensures consistency and maintainability, simplifying project setup and enabling developers to focus on writing quality code. Key components include project metadata, required and optional dependencies, development tool configurations (e.g., linters, formatters, and test runners), and build system specifications.

In this particular pyproject.toml file, the [build-system] section specifies that the Flit package should be used to build the project. The [project] section provides metadata about the project, such as the name, description, authors, and classifiers. The [project.optional-dependencies] section lists optional dependencies, like pyspark, while the [project.urls] section supplies URLs for project documentation, source code, and issue tracking.

The file also contains various configuration sections for different tools, including bandit, black, coverage, flake8, pyright, pytest, tox, and pylint. These sections specify settings for each tool, such as the maximum line length for flake8 and the minimum code coverage percentage for coverage.

#### Tool Sections

##### black

Black is a Python code formatter that automatically reformats Python code to conform to the PEP 8 style guide. It is used to maintain a consistent code style throughout the project.

The pyproject.toml file specifies the maximum line length and whether or not to use a "fast" mode for formatting. Black also allows for a pyproject.toml configuration file to be included in the project directory to customize its behavior.

##### coverage

Coverage is a tool for measuring code coverage during testing. It generates a report of which lines of code were executed during testing and which were not.

The pyproject.toml file specifies that branch coverage should be measured and that the tests should fail if the coverage falls below 100%. Coverage can be integrated with a variety of test frameworks, including pytest.

##### pytest

Pytest is a versatile testing framework for Python projects that simplifies test case creation and execution. It supports both pytest-style and unittest-style tests, offering flexibility in testing approaches. Key features include fixture support for clean test environments, parameterized tests to reduce code duplication, and extensibility through plugins for customization. Adopt pytest to streamline testing and tailor the framework to your project's specific needs.

The pyproject.toml file plays an essential role in configuring pytest for your project. It includes various test markers, such as integration, notebooks, gpu, spark, slow, and unit, which are used during testing. It also specifies options for generating test coverage reports, setting the Python path, and outputting test results in the xunit2 format. You can easily modify the pyproject.toml file to customize pytest for your project's specific needs.

##### pylint

Pylint is a versatile Python linter and static analysis tool that identifies errors and style issues in your code. It generates an in-depth report, presenting errors, warnings, and conventions found in the codebase. Pylint configurations are centralized in the pyproject.toml file, covering extension management, warning suppression, output formatting, and code style settings such as maximum function arguments and class attributes. The unique scoring system provided by Pylint helps developers assess and maintain code quality, ensuring a focus on readability and maintainability throughout the project's development.

##### pyright

Pyright is a static type checker for Python that uses type annotations to analyze your code and catch type-related errors. It is capable of analyzing Python code that uses type annotations as well as code that uses docstrings to specify types.

The pyproject.toml file contains configurations for Pyright, such as the directories to include or exclude from analysis, the virtual environment to use, and various settings for reporting missing imports and type stubs. By using Pyright, you can catch errors related to type mismatches before they even occur, which can save you time and improve the quality of your code.

##### flake8

Flake8 is a code linter for Python that checks your code for style and syntax issues. It checks your code for PEP 8 style guide violations, syntax errors, and more.

The pyproject.toml file contains configurations for Flake8, such as the maximum line length, which errors to ignore, and which style guide to follow. By using Flake8, you can ensure that your code follows the recommended style guide and catch syntax errors before they cause problems.

##### tox

In our repository, we use Tox to automate testing and building our Python package across various environments and versions. Configured through the pyproject.toml file, Tox is set up with four testing environments: py, integration, spark, and all. Each environment targets specific test categories or runs all tests together, ensuring compatibility and functionality in different scenarios.

The [tool.tox] section in the pyproject.toml file contains the Tox configuration details, including the legacy_tox_ini attribute. Our setup outlines the dependencies needed for each environment, as well as the test runner (e.g., pytest) and any associated commands. This ensures consistent test execution across all environments.

Tox helps us efficiently automate testing and building processes, maintaining the reliability and functionality of our Python package across a wide range of environments. By identifying potential compatibility issues early in the development process, we improve the quality and usability of our package. Our Tox configuration streamlines the development workflow, promoting code quality and consistency throughout the project.

### Development

#### Codespaces

In our project, we use GitHub Codespaces to simplify development and enhance collaboration. Codespaces provides a consistent, cloud-based workspace accessible from any device with a web browser, eliminating the need for local software installations. Our configuration automatically sets up required dependencies and development tools, while customizable workspaces and seamless GitHub integration streamline the development process and improve teamwork.

When you create a Codespace from a template repository, you initially work within the browser version of Visual Studio Code. Or, connect your local VS Code to a remote Codespace and enjoy seamless development without the hassle of local software installations. GitHub now supports this fantastic feature, making it a breeze to work on projects from any device.

To get started, simply set the desktop version of Visual Studio Code as your default editor in GitHub account settings. Then, connect to your remote Codespace from within VS Code, and watch as your development process is revolutionized! With Codespaces, you'll benefit from the consistency and flexibility of a cloud-based workspace while retaining the comfort of your local editor. Say hello to the future of development!

GitHub Codespaces also supports Settings Sync, a feature that synchronizes extensions, settings, and preferences across multiple devices and instances of Visual Studio Code. Whether Settings Sync is enabled by default in a Codespace depends on your pre-existing settings and whether you access the Codespace via the browser or the desktop application. With Settings Sync, you can ensure a consistent development experience across devices, making it even more convenient to work on your projects within GitHub Codespaces.

#### Devcontainer

Dev Containers in Visual Studio Code allows you to use a Docker container as a complete development environment, opening any folder or repository inside a container and taking advantage of all of VS Code's features. A devcontainer.json file in your project describes how VS Code should access or create a development container with a well-defined tool and runtime stack. You can use an image as a starting point for your devcontainer.json. An image is like a mini-disk drive with various tools and an operating system pre-installed. You can pull images from a container registry, which is a collection of repositories that store images.

Creating a dev container in VS Code involves creating a devcontainer.json file that specifies how VS Code should start the container and what actions to take after it connects. You can customize the dev container by using a Dockerfile to install new software or make other changes that persist across sessions. Additional dev container configuration is also possible, including installing additional tools, automatically installing extensions, forwarding or publishing additional ports, setting runtime arguments, reusing or extending your existing Docker Compose setup, and adding more advanced container configuration.

After any changes are made, you must build your dev container to ensure changes take effect. Once your dev container is functional, you can connect to and start developing within it. If the predefined container configuration does not meet your needs, you can also attach to an already running container instead. If you want to install additional software in your dev container, you can use the integrated terminal in VS Code and execute any command against the OS inside the container.

When editing the contents of the .devcontainer folder, you'll need to rebuild for changes to take effect. You can use the Dev Containers: Rebuild Container command for your container to update. However, if you rebuild the container, you will have to reinstall anything you've installed manually. To avoid this problem, you can use the postCreateCommand property in devcontainer.json. There is also a postStartCommand that executes every time the container starts.

You can also use a Dockerfile to automate dev container creation. In your Dockerfile, use FROM to designate the image, and the RUN instruction to install any software. You can use && to string together multiple commands. If you don't want to create a devcontainer.json by hand, you can select the Dev Containers: Add Dev Container Configuration Files... command from the Command Palette (F1) to add the needed files to your project as a starting point, which you can further customize for your needs.

#### Setup

This project includes three files in the .devcontainer and .vscode directories that enable you to use GitHub Codespaces or Docker and VSCode locally to set up an environment that includes all the necessary extensions and tools for Python development.

The Dockerfile specifies the base image and dependencies needed for the development container. The Dockerfile installs the necessary dependencies for the development container, including Python 3 and flit, a tool used to build and publish Python packages. It sets an environment variable to indicate that flit should be installed globally. It then copies the pyproject.toml file into the container and creates an empty README.md file. It creates a directory src/python_package and installs only the development dependencies using flit. Finally, it removes unnecessary files, including the pyproject.toml, README.md, and src directory.

The devcontainer.json file is a configuration file that defines the development container's settings, including the Docker image to use, any additional VSCode extensions to install, and whether or not to mount the project directory into the container. It uses the python-3-miniconda container as its base, which is provided by Microsoft, and also includes customizations for VSCode, such as recommended extensions for Python development and specific settings for those extensions. In addition to the above, the settings.json file also contains a handy command that can automatically install pre-commit hooks. These hooks can help ensure the quality of the code before it's committed to the repository, improving the overall codebase and making collaboration easier.

The settings.json file is where we can customize various project-specific settings within VSCode. These settings can include auto-formatting options, auto-trimming of trailing whitespace, Git auto-fetching, and much more. By modifying this file, you can tailor the VSCode environment to your specific preferences and workflow. It also contains specific settings for Python, such as the default interpreter to use, the formatting provider, and whether to enable unittest or pytest. Additionally, it includes arguments for various tools such as Pylint, Black, Flake8, and Isort, which are specified in the pyproject.toml file.

## Contributing

This project welcomes contributions and suggestions. For details, visit the repository's [Contributor License Agreement (CLA)](https://cla.opensource.microsoft.com) and [Code of Conduct](https://opensource.microsoft.com/codeofconduct/) pages.

#Hello
