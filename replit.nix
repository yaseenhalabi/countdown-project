{ pkgs }: {
  deps = [
    pkgs.neovim
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
}