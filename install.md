# Instalação das ferramentas

## Linux Debian*

**Node.js** e **npm**
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
sudo apt autoremove
```

**yarn**
```bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

**React Native**
```bash
sudo yarn global add create-react-native-app
```
 
## Editores de código e IDE

**vscode**
https://code.visualstudio.com/

**atom.io**
https://atom.io/
