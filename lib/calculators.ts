export function getReadableDuration(durationInSeconds: number): string {
    var hours = Math.floor(durationInSeconds / 3600);
    var minutes = Math.floor((durationInSeconds % 3600) / 60);
    var seconds =  Math.floor(durationInSeconds % 60) ;
    var ret = "";

    if (hours > 0) {
        ret += "" + hours + ":";
    }
    ret += "" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "");
    ret += "" + seconds;
    return ret;
}