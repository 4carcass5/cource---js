// BEGIN
export const getTheNearestLocation = (locations, point = [0, 0]) => {
    if (locations.length === 0) {
      return null;
    }
    return locations.reduce((nearestLocation, location) => {
      const [, [x1, y1]] = nearestLocation;
      const [, [x2, y2]] = location;
      const [x0, y0] = point;
      const distanceToNearestLocation = Math.hypot(x1 - x0, y1 - y0);
      const distanceToLocation = Math.hypot(x2 - x0, y2 - y0);
      return distanceToLocation < distanceToNearestLocation ? location : nearestLocation;
    }, locations[0]);
  };
  
  export default getTheNearestLocation;
// END