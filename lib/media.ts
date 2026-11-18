// 이미지 대신 영상(mp4, webm)인지 판별
export const isVideo = (src: string) => /\.(mp4|webm)$/i.test(src);

// 미리보기(공유 이미지, 블로그 썸네일)에 쓸 첫 번째 '이미지'
export const firstStill = (sources: string[]) => sources.find((src) => !isVideo(src));
