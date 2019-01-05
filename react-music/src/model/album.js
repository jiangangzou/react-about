export class Album {
    constructor(id, mId, name, img, singer, publicTime) {
      this.id = id;
      this.mId = mId;
      this.name = name;
      this.img = img;
      this.singer = singer;
      this.publicTime = publicTime;
    }
  }
  
  export function createAlbumByList(data) {
    return new Album(
      data.album_id,
      data.album_mid,
      data.album_name,
      `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,
      filterSinger(data.singers)
    )
  }
  
  function filterSinger(singers) {
    let singerArr = singers.map(singer => {
      return singer.singer_name;
    });
    return singerArr.join("/");
  }
  
  export function createAlbumByDetail(data) {
    return new Album(
      data.id,
      data.mid,
      data.name,
      `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.mid}.jpg?max_age=2592000`,
      data.singername,
      data.aDate

    );
  }
  