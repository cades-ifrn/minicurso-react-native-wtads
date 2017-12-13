# Instalação das ferramentas

## Linux Debian*

**Node.js** e **npm**

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
nvm install node
node --version
npm --version
```

**yarn**

```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

**React-Native CLI**

```bash
sudo yarn global add create-react-native-app
```


 
## Editores de código e IDE

**vscode**
https://code.visualstudio.com/

**atom.io**
https://atom.io/
