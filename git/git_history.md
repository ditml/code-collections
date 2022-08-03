git status
git stat
git add *
git commit -m "Commit info"
git push origin main

git clone https://github.com/username/repo_name.git

git remote -v

git config --list
git config user.name "ditml"
git config user.email "durgaprasad.myway.s@gmail.com"

git branch -v
git branch dev

git switch main
git switch dev

git log
:q - quit

git log --pretty=format:"%h - %an, %ar : %s"
git logs

git rm file_to_be_removed

git reset --hard 092962ec15780462016832a6bf29722852e6d3ad
git reset HEAD@\{0\}    (commit: Redux Demo _ Tutorial code from Codevolution)
git reset HEAD@{1}  (commit: React-Redux Demo _ Tutorial code from Codevol…)
git reset HEAD@{2}  (clone: from https://github.com/ditml/code-collections…)
git reset main                                                (Local Branch)
git reset origin/HEAD                                        (Remote Branch)
git reset origin/main                                        (Remote Branch)

git restore --staged *