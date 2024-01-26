import { useSelector } from "react-redux";
import { deepEqual } from "assert";
const useDeepSelector = (s: any) => {
  return useSelector(s, (prevProps: any, nextProps: any) => {
    if(typeof prevProps === 'string' && typeof nextProps === 'string') {
        return prevProps.includes(nextProps);
    }
    
    console.log("prev", prevProps, " next", nextProps);
    return true;
  });
};

export default useDeepSelector;
