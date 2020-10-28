Learning storybook from scratch!

// Place your key bindings in this file to override the defaults
[
    {
        "key": "ctrl+shift+l",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet": "console.log(${TM_SELECTED_TEXT}$1);"
        }
      },
      {
        "key": "ctrl+shift+s",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet":"<?php ${TM_SELECTED_TEXT}$1  ?>$2"         
        }
      },
      {
        "key": "ctrl+shift+a",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet":"(($1)=>{  \n $2\n})$3",
        }
      },
      
      {
        "key": "ctrl+shift+z",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet":"($1)=>{  \n $2 \n}$3",
        }
      },
      {
        "key": "ctrl+shift+x",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet":"[\t\n{\t\n ${TM_SELECTED_TEXT}$1\t\n},\t\n]$2",
        }
      },
      {
        "key": "ctrl+shift+w",
        "command": "editor.action.insertSnippet",
        "when": "editorTextFocus",
        "args": {
          "snippet":"import {$2} from '$1'",
        }
      },

]


"emmet.includeLanguages": {

        "vue-html": "html",
        "javascript": "javascriptreact"
    },