# Kendo UI Icons

## Setting up the repo
1. Clone the repository into the kendo-icons folder.
1. Set up te repo by running `npm run setup`.

## Adding new icons

1. Create a new branch from develop by running `git checkout -b branch-name`
1. Copy the newly created SVG icon in `src/icons/solid` folder.
1. Stage, commit and push the changes.
1. Before pushing, the `icons.json` file will be updated automatically. The newly created icon will be added at the end of the file.
1. Open the `icons.json` and fill in the relevant icon group, e.g:

```
        {
            "name": "caret-tr",
            "ligatures": [],
            "aliases": [],
            "groups": [ "navigation" ],
            "unicode": "e000"
        }
```

1. Fill the aliases and ligatures fields if there are any.
1. Stage and commit the updated `icons.json`.
1. Push the changes.
1. Create a Pull Request.
1. After the new icon and the updated `icons.json` file are pushed, an additional commit will be automatically generated with the updated font and styles referencing the new icon.