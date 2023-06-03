pnpm install

pnpm husky install
pnpm husky add .husky/commit-msg 'npx commitlint --edit $1'
