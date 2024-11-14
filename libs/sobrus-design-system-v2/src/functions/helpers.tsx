export function formatBytes(bytes: string | number, decimals = 2) {
    if (!+bytes) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(+bytes) / Math.log(k));

    return `${parseFloat((+bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
export function generateRandomId(prefix = ''): string {
    const timestamp = Date.now().toString(36); // Encodes current timestamp
    const randomSection = Math.random().toString(36).substring(2, 9); // Generates a random alphanumeric string
    const uniqueSection = Math.random().toString(36).substring(2, 4) + ((Math.random() * 100000000) | 0).toString(36); // Adds another level of randomness
    return `${prefix}${timestamp}-${randomSection}-${uniqueSection}`;
}
