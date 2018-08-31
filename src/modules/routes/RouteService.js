import routeStore from './RouteStore';
import enhancedFetch from '../../utils/enhancedFetch';

export function addRoute(data) {
  return enhancedFetch(
    '/route/add',
    {
      body: data,
      method: 'post',
    },
  )
    .then((response) => {
      routeStore.routeDescription = response.routeDescription;
      routeStore.routeName = response.routeName;
      routeStore.routeID = response.routeID;
    })
    .catch(error => console.error('Error:', error));
}
