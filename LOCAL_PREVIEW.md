# Local website preview

Run `./bin/preview` from this repository, then open http://127.0.0.1:4000.
Stop the server with Ctrl+C. Set `PORT=4001 ./bin/preview` if port 4000 is occupied.

This Mac has a checkout-local Ruby 3.3.5 runtime and Bundler 2.6.2 under `.local/`. The launcher sets their paths automatically. The runtime and installed gems are ignored by Git. On another computer, install Ruby 3.3 and Bundler 2.6.2, then use the same launcher.

The local configuration uses original image files without running ImageMagick and disables analytics. The unused template notebook under assets/jupyter is excluded from the build. The GitHub Pages deployment workflow is unchanged.
