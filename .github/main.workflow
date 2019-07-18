workflow "GitHub Pages" {
  on = "push"
  resolves = ["deploy"]
}

action "is-branch-master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "install-dependencies" {
  needs = ["is-branch-master"]
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "build" {
  needs = ["install-dependencies"]
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "run-script build"
}

action "deploy" {
  needs = "build"
  uses = "peaceiris/actions-gh-pages@v1.0.1"
  env = {
    PUBLISH_BRANCH = "gh-pages"
    PUBLISH_DIR = "./build"
  }
  secrets = ["ACTIONS_DEPLOY_KEY"]
}
