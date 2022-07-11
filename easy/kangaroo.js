function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2 && x2 > x1) {
        return "NO";
    }else if((x2 - x1) % (v2 - v1) == 0){//x1+(n*v1)=x2+(n*v2)  donc arrive at the same time
        return "YES" ;
    }else{
        return "NO";
    }
}