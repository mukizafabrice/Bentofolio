module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [],
  buildOptions: {
    out: "build",
    clean: true,
  },
  alias: {
    "@fortawesome/fontawesome-free":
      "./node_modules/@fortawesome/fontawesome-free",
  },
};
