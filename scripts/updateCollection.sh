#!/bin/bash
curl 'https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171' --output velov.json
cat velov.json | jq '.features' > velo.json
mongo ProjetNoSql --eval "db.velov.drop()"
mongoimport --db ProjetNoSql --collection velov --file velo.json --jsonArray


curl 'https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=2.0.0&outputformat=GEOJSON&maxfeatures=10000&request=GetFeature&typename=sit_sitra.sittourisme&SRSNAME=urn:ogc:def:crs:EPSG::4171'  --output PointCles.json
cat PointCles.json | jq '.features' > pointCle.json
mongo ProjetNoSql --eval "db.pointCle.drop()"
mongoimport --db ProjetNoSql --collection pointCle --file pointCle.json --jsonArray


echo "Le scripte est terminé"
