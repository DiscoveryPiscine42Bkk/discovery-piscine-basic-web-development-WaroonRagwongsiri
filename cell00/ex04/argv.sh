X=0
for i in "$@"
do
	if [ "$X" -gt 2 ]
		then
			exit
	fi
	echo "$i"
	X=$((X+1))
done
