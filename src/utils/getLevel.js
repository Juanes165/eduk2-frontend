export default function getLevel(points) {
    if(points < 50) {
        return 1
    } else if (points < 100) {
        return 2
    } else {
        return 3
    }
}