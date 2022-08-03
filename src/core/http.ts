export const getApiHost = () => {
    const apiHost = process.env.NEXT_PUBLIC_SEASIDE_API_HOST;

    if (!apiHost) throw new Error("Cannot find NEXT_PUBLIC_SEASIDE_API_HOST");

    return apiHost;
};
