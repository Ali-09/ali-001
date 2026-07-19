module.exports = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    // Buscar la regla existente que maneja importaciones de SVG en Next.js
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        // Reaplicar la regla existente para importaciones que terminen en ?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convertir el resto de importaciones *.svg a componentes de React
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
          use: ["@svgr/webpack"],
        }
      );

      // Excluir *.svg de la regla por defecto para que no interfiera
      fileLoaderRule.exclude = /\.svg$/i;
    } else {
      // Configuración de respaldo si Next.js cambia su regla base
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
    }

    return config;
  }
}
