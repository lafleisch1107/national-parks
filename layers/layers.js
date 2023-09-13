var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Arizona_1 = new ol.format.GeoJSON();
var features_Arizona_1 = format_Arizona_1.readFeatures(json_Arizona_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arizona_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arizona_1.addFeatures(features_Arizona_1);
var lyr_Arizona_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arizona_1, 
                style: style_Arizona_1,
                interactive: false,
                title: '<img src="styles/legend/Arizona_1.png" /> Arizona'
            });
var format_NationalParks_2 = new ol.format.GeoJSON();
var features_NationalParks_2 = format_NationalParks_2.readFeatures(json_NationalParks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalParks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalParks_2.addFeatures(features_NationalParks_2);
var lyr_NationalParks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NationalParks_2, 
                style: style_NationalParks_2,
                interactive: true,
                title: '<img src="styles/legend/NationalParks_2.png" /> National Parks'
            });

lyr_Basemap_0.setVisible(true);lyr_Arizona_1.setVisible(true);lyr_NationalParks_2.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_Arizona_1,lyr_NationalParks_2];
lyr_Arizona_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'Arizona', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', });
lyr_NationalParks_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'GlobalID': 'GlobalID', 'AreaID': 'AreaID', 'UNIT_CODE': 'Code', 'GIS_Notes': 'GIS_Notes', 'UNIT_NAME': 'Name', 'DATE_EDIT': 'DATE_EDIT', 'STATE': 'State', 'REGION': 'Region', 'GNIS_ID': 'GNIS_ID', 'UNIT_TYPE': 'Type', 'CREATED_BY': 'CREATED_BY', 'METADATA': 'METADATA', 'PARKNAME': 'Park Name', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_Arizona_1.set('fieldImages', {'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'AFFGEOID': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', });
lyr_NationalParks_2.set('fieldImages', {'OBJECTID': 'Hidden', 'CreationDa': 'Hidden', 'Creator': 'Hidden', 'EditDate': 'Hidden', 'Editor': 'Hidden', 'GlobalID': 'Hidden', 'AreaID': 'Hidden', 'UNIT_CODE': 'TextEdit', 'GIS_Notes': 'Hidden', 'UNIT_NAME': 'TextEdit', 'DATE_EDIT': 'Hidden', 'STATE': 'TextEdit', 'REGION': 'TextEdit', 'GNIS_ID': 'Hidden', 'UNIT_TYPE': 'TextEdit', 'CREATED_BY': 'Hidden', 'METADATA': 'Hidden', 'PARKNAME': 'TextEdit', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_Arizona_1.set('fieldLabels', {'NAME': 'no label', });
lyr_NationalParks_2.set('fieldLabels', {'UNIT_CODE': 'inline label', 'UNIT_NAME': 'inline label', 'STATE': 'inline label', 'REGION': 'inline label', 'UNIT_TYPE': 'inline label', 'PARKNAME': 'inline label', });
lyr_NationalParks_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});