
export const convertToBase64ToFile = async (dataUrl: string, fileName: string,type:string): Promise<File> {

    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type });
}