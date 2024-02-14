function calculateRevenue(dataPoints) {
    return dataPoints.reduce((sum, dataPoint) => sum + parseFloat(dataPoint['Profit Percentage']), 0);
  }
  

  //bcknd-> Downsampling algorithm , frntnd -> d3.js or chart.js 
  //check cors 
  //slack update - #233
  //bug at growth_dub_34577 :- line-487
  //prod->env.variables
  //custom hooks at line 167 -> for slider data set (range(1000-100000))

  function downsampleData(dataset, targetSize) {
    const originalSize = dataset.length;
  
    if (targetSize >= originalSize) {
      return dataset;
    }
  
    const interval = Math.ceil(originalSize / targetSize);
    const downsampledData = [];
  
    for (let i = 0; i < originalSize; i += interval) {
      const startIndex = i;
      const endIndex = Math.min(i + interval, originalSize);
  
      // Calculate the average profit percentage over the interval
      const averageProfit = calculateRevenue(dataset.slice(startIndex, endIndex));
  
      // Use the timestamp of the first data point in the interval
      const timestamp = dataset[startIndex].Timestamp;
  
      // Create a new downsampled data point
      downsampledData.push({ Timestamp: timestamp, 'ProfitPercentage': averageProfit });
    }
  
    return downsampledData;
  }
    
    module.exports = {  downsampleData, calculateRevenue };
    