
import { BrainCircuit, ChevronLeft, ChevronRight, Timer } from 'lucide-react';
import React, { useEffect, useRef, useState, DetailedHTMLProps, HTMLAttributes } from 'react'


import { FosModule } from './fosModules';
import { SelectionPath, FosNode } from "@fosforescent/fosforescent-js"
import { Button } from '@/components/ui/button';
import { suggestRecursive } from '@/lib/suggestRecursive';
import { parse } from 'path';
import { FosReactOptions } from '..';



const parseDurationFromMs = (time: number) => {
  const years = Math.floor(time / (1000 * 60 * 60 * 24 * 365))
  const timeMinusYears = time - years * (1000 * 60 * 60 * 24 * 365)
  const months = Math.floor(timeMinusYears / (1000 * 60 * 60 * 24 * 30))
  const timeMinusMonths = timeMinusYears - months * (1000 * 60 * 60 * 24 * 30)
  const weeks = Math.floor(timeMinusMonths / (1000 * 60 * 60 * 24 * 7))
  const timeMinusWeeks = timeMinusMonths - weeks * (1000 * 60 * 60 * 24 * 7)
  const days = Math.floor(timeMinusWeeks / (1000 * 60 * 60 * 24))
  const timeMinusDays = timeMinusWeeks - days * (1000 * 60 * 60 * 24)
  const hours = Math.floor(timeMinusDays / (1000 * 60 * 60))
  const timeMinusHours = timeMinusDays - hours * (1000 * 60 * 60)
  const minutes = Math.floor(timeMinusHours / (1000 * 60))
  const timeMinusMinutes = timeMinusHours - minutes * (1000 * 60)
  const seconds = Math.floor(timeMinusMinutes / 1000)
  const timeMinusSeconds = timeMinusMinutes - seconds * 1000
  const milliseconds = timeMinusSeconds

  return { years, months, weeks, days, hours, minutes, seconds, milliseconds };
};

const durationToMs = (time: {milliseconds?: number, seconds?: number, minutes?: number, hours?: number, days?: number, weeks?: number, months?: number, years?: number}) => {
  // turn object into int number of milliseconds
  try {
    const milliseconds = time.milliseconds || 0
    const seconds = (time.seconds || 0) * 1000
    const minutes = (time.minutes || 0) * 60 * 1000
    const hours = (time.hours || 0) * 60 * 60 * 1000
    const days = (time.days || 0) * 24 * 60 * 60 * 1000
    const weeks = (time.weeks || 0) * 7 * 24 * 60 * 60 * 1000
    const months = (time.months || 0) * 30 * 24 * 60 * 60 * 1000
    const years = (time.years || 0) * 365 * 24 * 60 * 60 * 1000
    return milliseconds + seconds + minutes + hours + days + weeks + months + years  
  } catch (e) {
    console.error('Error converting duration to ms', time, e)
    throw e
  }
}

export const durationDisplay = (time: number) => {
  
  const {
    years, months, weeks, days, hours, minutes, seconds, milliseconds
  } = parseDurationFromMs(time)

  const hoursString = `${hours}:`
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`
  // console.log('durationDisplay', years, months, weeks, days, hours, minutes, seconds, milliseconds)
  const millisecondsString = !(years || months || weeks || days || hours) ? '' : `.${(milliseconds / 1000).toFixed(3).slice(2)}`

  return `${years ? `${years} yr, ` : ''}${months ? `${months} mo, ` : ''}${weeks ? `${weeks} wk, ` : ''}${days ? `${days} days, `:''} ${hoursString}${minutesString}:${secondsString}${millisecondsString}`
}



export const DurationInput = ({ 
  value: time, 
  onUpdate, 
  disabled = false,
  ...props
} : { 
  value: number, 
  onUpdate: (value: number) => void,
  disabled?: boolean,  
} & Partial<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> ) => {




  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleColumns, setVisibleColumns] = useState(0);
  const [startIndex, setStartIndex] = useState(0);


  // Calculate the number of visible columns based on container width
  useEffect(() => {
    const updateVisibleColumns = () => {
      // console.log('updateVisibleColumns', containerRef.current?.offsetWidth, containerRef.current)
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const columnWidth = 60; // Approximate width of each column in pixels
        // console.log('updateVisibleColumns', containerRef.current?.offsetWidth, containerRef.current, Math.floor(containerWidth / columnWidth))
        setVisibleColumns(Math.floor( (containerWidth - 50) / columnWidth) || 1);
      }
    };

    updateVisibleColumns();
    window.addEventListener('resize', updateVisibleColumns);

    return () => {
      window.removeEventListener('resize', updateVisibleColumns);
    };
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, inputs.length - visibleColumns));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };



  const {
    years, months, weeks, days, hours, minutes, seconds, milliseconds
  } = parseDurationFromMs(time)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newTime = { years, months, weeks, days, hours, minutes, seconds, milliseconds }
    newTime[name as keyof typeof newTime] = parseInt(value)
    onUpdate(durationToMs(newTime))
  }

  const inputs = [
    { label: 'Years', name: 'years', value: years },
    { label: 'Months', name: 'months', value: months },
    { label: 'Weeks', name: 'weeks', value: weeks },
    { label: 'Days', name: 'days', value: days },
    { label: 'Hours', name: 'hours', value: hours },
    { label: 'Minutes', name: 'minutes', value: minutes },
    { label: 'Seconds', name: 'seconds', value: seconds },
    { label: 'Milliseconds', name: 'milliseconds', value: milliseconds}
  ];

  return (
    <div className={props.className || ''} style={{...(props.style || {}), ...{}}}>
      <div className='flex'>
        {visibleColumns < (inputs.length -1) && <button onClick={handlePrev} disabled={startIndex === 0}>
          <ChevronLeft />
        </button>}
        <div ref={containerRef} style={{
          width: 'calc(100% - 20px)'
        }}>
          {inputs.slice(startIndex, startIndex + visibleColumns).map(({ label, name, value }) => (
            <div key={name} className="w-16 text-xs mx-1 inline-block">
              <label className="block">
                {label}:
                <input
                  type="number"
                  name={name}
                  className="w-full text-lg"
                  value={value}
                  onChange={handleChange}
                  disabled={disabled}
                />
              </label>
            </div>
          ))}
        </div>
        {visibleColumns < (inputs.length) && <button onClick={handleNext} disabled={startIndex + visibleColumns >= inputs.length}>
          <ChevronRight />
        </button>}
      </div>
    </div>
  )


}







const ResourceComponent = ({ node, options }: { node: FosNode, options: FosReactOptions}) => {






  const durationInfo = getDurationInfo(node)


  const handleDurationEdit = (value: {
    marginal: number
  }) => {
    setDurationInfo(node, value)
  }
  
  const handleMinDurationPath = async () => {
    const newContext = node.setPath({ [node.getNodeData().selectedOption]: durationInfo.minPaths })
  }
  
  const handleMaxDurationPath = async () => {
    const newContext = node.setPath({ [node.getNodeData().selectedOption]: durationInfo.maxPaths })
  }
  

  


  const systemPromptBase = `Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value`
  const getUserPromptBase = (thisDescription: string, parentDescriptions: string[], node: FosNode) => `How long does it take to ${thisDescription} in the as a subtask of ${parentDescriptions.join(' subtask of the task ')} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years.`
  const systemPromptRecursive = `Take a deep breath.  Please respond only with a single valid JSON object with the optional keys "milliseconds", "seconds", "minutes", "hours", "days", "weeks", "months", or "years" and a number value`
  const getUserPromptRecursive = (thisDescription: string, parentDescriptions: string[], node: FosNode) => {
    const resourceInfo = getDurationInfo(node)
    return `How long does it take to ${thisDescription} in the as a subtask of ${parentDescriptions.join(' subtask of the task ')} please express in terms of milliseconds, seconds, minutes, hours, days, weeks, months, or years., but factoring out the time of its subtasks, which are estimated to take somewhere between ${resourceInfo.min} and ${resourceInfo.max}, averaging ${resourceInfo.average}. This will leave only the marginal time, which is the information we want.`
  }
  const pattern = /.*(\{[^{}]*\}).*/m
  const parsePattern = (result: any, node: FosNode): DurationData => {

    console.log('parsePattern', result)

    const resultParsed = result as {
      milliseconds?: number,
      seconds?: number,
      minutes?: number,
      hours?: number,
      days?: number,
      weeks?: number,
      months?: number,
      years?: number
    }

  
    
    return { marginal: durationToMs(resultParsed) } 
  } 



  const handleSuggestDuration = async () => {
    if (options?.canPromptGPT && options?.promptGPT){
      const newContext = await suggestRecursive(options.promptGPT, node, {
        systemPromptBase,
        getUserPromptBase,
        systemPromptRecursive,
        getUserPromptRecursive,
        pattern,
        parsePattern,
        getResourceInfo: getDurationInfo,
        setResourceInfo: setDurationInfo,
        checkResourceInfo: checkDurationInfo,
      } )
      if (newContext){
        node.context.setNodes(newContext.data.nodes)
      }else{
        options?.toast && options.toast({
          title: 'Error',
          description: 'No suggestions could be generated',
          duration: 5000,
        })
      }
    } else {
      console.error('No authedApi')
      const err =  new Error('No authedApi')
      err.cause = 'unauthorized'
      throw err
    }
  }


  return (<div className='w-full text-center overflow-hidden'>
  <div className='mx-auto items-center justify-center gap-1.5 flex items-center'>
    <Button variant={"secondary"} className='bg-emerald-900 inline-block w-14' onClick={handleSuggestDuration} title="Get estimated duration"><BrainCircuit /></Button>
    <DurationInput value={durationInfo.marginal} onUpdate={(value) => handleDurationEdit({marginal: value})} className='' style={{
      width: 'calc(100% - 4rem)',
      maxWidth: '600px',
      display: 'inline-block',
    }} />
  </div>
  <div className='flex flex-row justify-stretch items-center mx-auto' style={{ maxWidth: '600px' }}>
    <div className='px-3 overflow-hidden w-1/2'>
      <div title="Time of Currently Selected Path"> Curr: {durationDisplay(durationInfo.current)} </div>
      <div title="Time of Average Path"> Avg: {durationDisplay(durationInfo.average)} </div>
    </div>
    <div className='px-3 overflow-hidden w-1/2'>
      <Button variant={"secondary"} className='bg-emerald-900 p-1' onClick={handleMinDurationPath} title="Set min duration path"> <div className='w-full'>Min: {durationDisplay(durationInfo.min)} </div></Button>
      <Button variant={"secondary"} className='bg-emerald-900 p-1' onClick={handleMaxDurationPath} title="Set max duration path"> <div className='w-full'>Max: {durationDisplay(durationInfo.max)} </div></Button>
    </div>
  </div>
  </div>)





}



type DurationData = {
  marginal: number,
}

type DurationInfo = {
  min: number,
  max: number,
  average: number,
  current: number,
  minPaths: SelectionPath[],
  maxPaths: SelectionPath[],
  marginal: number
}

export const getDurationInfo = (thisNode: FosNode, index?: number): DurationInfo => {
  const indexToGet = thisNode.parseIndex(index)
  // get selected option

  // for each child
    // get min (+ marginal)
    // get max (+ marginal)
    // get avg (+ marginal)
    // get current (+ marginal)
    // get min paths
    // get max paths
  


    
  const children = thisNode.getChildren(indexToGet)

  const thisNodeOptionContent = thisNode.getOptionContent(indexToGet)

  const thisNodeDuration = thisNodeOptionContent.data?.duration?.marginal || 0




  if (children.length === 0){
    return {
      min: thisNodeDuration,
      max: thisNodeDuration,
      average: thisNodeDuration,
      current: thisNodeDuration,
      minPaths: [],
      maxPaths: [],
      marginal: thisNodeDuration
    }
  } else {

    let min = 0
    let max = 0
    let average = 0
    let current = 0
    const minPaths: DurationInfo["minPaths"] = []
    const maxPaths: DurationInfo["maxPaths"] = []

    children.forEach((child, i) => {
      const childData = child.getNodeData()
      const childOptions = childData.options

  
      let minOptionDuration = Number.MAX_SAFE_INTEGER;
      let maxOptionDuration = Number.MIN_SAFE_INTEGER;
      const minOptionPaths: SelectionPath = {};
      const maxOptionPaths: SelectionPath = {};
      let avgOptionDuration = 0;
      let currentOptionDuration = 0;

      childOptions.forEach( (option, j) => {
        const childOptionDurationInfo = getDurationInfo(child, j)
        if (childOptionDurationInfo.min < minOptionDuration){
          minOptionDuration = childOptionDurationInfo.min
          minOptionPaths[j] = childOptionDurationInfo.minPaths
        }
        if (childOptionDurationInfo.max > maxOptionDuration){
          maxOptionDuration = childOptionDurationInfo.max
          maxOptionPaths[j] = childOptionDurationInfo.maxPaths
        }
        avgOptionDuration = ((avgOptionDuration * j) + childOptionDurationInfo.average) / (j + 1)
        if (j === childData.selectedOption){
          currentOptionDuration = childOptionDurationInfo.current
        }
      })
      min += minOptionDuration
      max += maxOptionDuration
      average += avgOptionDuration 
      current += currentOptionDuration
    });

    return {
      min: min + thisNodeDuration,
      max: max + thisNodeDuration,
      average: average + thisNodeDuration,
      current: current + thisNodeDuration,
      minPaths: minPaths,
      maxPaths: maxPaths,
      marginal: thisNodeDuration
    }

    
  }


}






export const setDurationInfo = (node: FosNode, value: DurationData) => {
  const nodeData = node.getData()

  return node.setData({
    ...nodeData,
    duration: value
  })

}

export const checkDurationInfo = (node: FosNode) => {
  const nodeData = node.getData()
  return !!nodeData.duration
}






const module: FosModule = {
  icon: <Timer />,
  name: 'duration',
  HeadComponent: ResourceComponent,
}

export default module